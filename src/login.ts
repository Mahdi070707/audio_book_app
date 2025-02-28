<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Login</h1>
    <div>
        <h2>Authentication Options</h2>
        <a href="/auth/google">Login with Google</a><br>
        <a href="/auth/apple">Login with Apple</a><br>
        <a href="/auth/microsoft">Login with Microsoft</a>
    </div>
    <div>
        <h2>Or Login with Email</h2>
        <form action="/login" method="POST">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Create one</a></p>
    </div>
</body>
</html>