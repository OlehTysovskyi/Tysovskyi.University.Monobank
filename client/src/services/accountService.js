const getAccountData = async () => {
    try {
      const accountId = localStorage.getItem("accountId");
      if (!accountId) {
        return null;
      }
  
      const response = await fetch(`/api/get-account-by-id/${accountId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
  
      const accountData = await response.json();
      return accountData.account;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };
  
  export default getAccountData;
  