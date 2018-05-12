<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script>
        var token = "<?php echo e(csrf_token()); ?>";
    </script>
    <script src="/js/JQuery.js"></script>
    <script src="/js/todo.js"></script>
    <link rel="stylesheet" href="/css/todo.css">
    <title>Todo</title>
</head>
<body>
    <div class="content">
        <div class="todo">
            <h1>TODO</h1>
            <button id="addBtn" class="button" value="add">Add</button>
            <button id="delBtn" class="button" value="add">Delete</button>
            <input type="text" name="myInput" id="myInput" placeholder="Enter your action">
            <div class="container">
                <form>
                </form>
            </form>
        </div>
    </div>

</body>
</html>
