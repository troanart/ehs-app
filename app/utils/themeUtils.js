
export const getTokenValues = (theme) => {
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  
    return {
      colorBgContainer,
      borderRadiusLG,
    };
  };