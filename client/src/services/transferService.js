export const createTransfer = async (formData) => {
    try {
      const response = await fetch("/api/create-transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Transfer created successfully");
        return data;
      } else if (response.status === 400) {
        throw new Error(data.message);
      } else {
        throw new Error("Transfer creating failed");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };