
if (window.location.pathname === "/road1") {
    setTimeout(() => {
      window.location.href = "/";
    }, 3 * 1000);
  }

export const Road1 = () => {
    return (
        <main>
            <h1>Now Roading...</h1>
            <img style={{width:"200px",height:"auto"}} src="https://i.gifer.com/ZZ5H.gif" alt="road"></img>
            
        </main>
    )
}

