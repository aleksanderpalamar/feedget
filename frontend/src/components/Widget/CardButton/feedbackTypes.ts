export const feedbackTypes = {
  BUG: {
    title: "Problemas",
    images: {
      src: "./images/Bug.svg",
      alt: "Problemas",
    }
  },
  IDEA: {
    title: "Ideia",
    images: {
      src: "./images/Idea.svg",
      alt: "Ideia",
    }
  },
  OTHER: {
    title: "Outros",
    images: {
      src: "./images/Thought.svg",
      alt: "Outros",
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes;