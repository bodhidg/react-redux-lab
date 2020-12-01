function NotFound() {
    console.log("This is inside NotFound function!");
    return (
        <>
            <h1>404 Not Found</h1>
            <p>Oops! We couldn't find the thing you are asking for. Sorry about that!</p>
            <p>Maybe try one of these instead?</p>
            <ul>
                <li><a href="/">Find a movie</a></li>
                <li><a href="login">Login</a></li>
                <li><a href="/account">Register</a></li>
            </ul>

        </>
    );
}

export default NotFound