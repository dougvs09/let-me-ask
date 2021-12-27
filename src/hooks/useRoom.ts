import { useEffect, useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from './useAuth';

type QuestionTypes = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  response: string | undefined;
  isHighlighted: boolean;
  isAnswered: boolean;
  likeCount: number;
  likeId: string | undefined;
};

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    response: string;
    isHighlighted: boolean;
    isAnswered: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

export const useRoom = (roomId: string | undefined) => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState<QuestionTypes[]>([]);
  const [title, setTitle] = useState('');
  const [authorId, setAuthorId] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.on('value', (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestion = Object.entries(firebaseQuestions).map(
        ([key, value]) => ({
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(
            ([id, like]) => like.authorId === user?.id
          )?.[0],
          response: value.response,
        })
      );

      setAuthorId(databaseRoom.authorId);
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestion);
    });

    return () => {
      roomRef.off('value');
    };
  }, [roomId, user?.id]);

  return {
    questions,
    title,
    authorId,
  };
};
