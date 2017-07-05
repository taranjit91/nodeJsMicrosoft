var Connection = require('tedious').Connection;
var Request = require('tedious').Request;


// Create connection to database
var config = {
    userName: 'nodeadmin', // update me
    password: 'Node@348', // update me
    server: 'testnode.database.windows.net', // update me
    options: {
        encrypt: true,
        database: 'testnode' //update me,

    }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
    if (err) {
        console.log(err)
    } else {
        deleteFromDatabase()
    }
});



function insertIntoDatabase() {
    console.log("Inserting a user into database...");
    request = new Request(
        "INSERT INTO [users_node] (userId, userName, city)  VALUES (3, 'Mike', 'Burlington')",
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) inserted');
        }
    );
    connection.execSql(request);
}

function updateInDatabase() {
    console.log("Updating user name in database...");
    request = new Request(
        "UPDATE [users_node] SET userName = 'vikram' WHERE userId = 1",
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) updated');
        }
    );
    connection.execSql(request);
}

function deleteFromDatabase() {
    console.log("Deleting the brand new product in database...");
    request = new Request(
        "DELETE FROM [users_node] WHERE userId = 1",
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) returned');
        }
    );
    connection.execSql(request);
}



function queryDatabase() {
    console.log('Reading rows from the Table...');

    // Read all rows from table
    request = new Request(
        "SELECT * FROM [users_node] ",
        function(err, rowCount, rows) {
            console.log(rowCount + ' row(s) returned');
            console.log(JSON.stringify(rows.length));
        }
    );

    request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
        });
    });

    connection.execSql(request);
}