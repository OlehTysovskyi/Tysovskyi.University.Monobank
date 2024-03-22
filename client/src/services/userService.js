// userDataService.js

const fetchUserData = async (userId, accountId) => {
  try {
    const userResponse = await fetch(`/api/get-username-by-id/${userId}`);
    if (!userResponse.ok) {
      throw new Error("Failed to fetch user data");
    }
    const userData = await userResponse.json();
    const username = userData.username;

    const accountResponse = await fetch(
      `/api/get-account-balance-by-id/${accountId}`
    );
    if (!accountResponse.ok) {
      throw new Error("Failed to fetch account data");
    }
    const accountData = await accountResponse.json();
    const balance = accountData.balance;

    return { username, balance };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { fetchUserData };
