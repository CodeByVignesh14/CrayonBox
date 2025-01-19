export const fetchCount = async (amount: number): Promise<{ data: number }> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ data: amount }), 500); // Simulating an API delay
    });
  };
