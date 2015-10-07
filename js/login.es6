let login = (username, password) => {
  if(username !== 'admin' || password !== 'admin1') {
    console.log('incorrect password')
  }
};

// login('admin', 'test');
export {login};
