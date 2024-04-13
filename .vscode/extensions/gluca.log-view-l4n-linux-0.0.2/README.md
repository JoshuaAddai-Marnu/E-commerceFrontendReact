# Serilog events viewer
Visual Studio Code Extention to inspect serilog events

This vscode extention allows inspection of logs created with serilog sinks here: https://github.com/serilog/serilog-sinks-mongodb.

**Search in vscode pallete for "Inspect Serilog events"**

As connection string format use following:
```
mongodb://user:pass@localhost:27017/db?authSource=admin&readPreference=primary&directConnection=true&ssl=false
```

```
note the db after last '/'
use %nn for special characters in the password
```
```
authSource=admin is optional if you define a user in the schema
```
## Preview
![](https://raw.githubusercontent.com/LucaGabi/VSE-Serilog-events-viewer/main/media/preview.jpg)
## Features:
```
- filter by time frame, level, content
- filter by expresion (similar to where clause in SQL)
- persist config file for future inspection
- shortcuts:
    - 'f' toggle filter panel
    - 'esc' toggle expression filtering
    - inside expression editor 'ctrl-up' & 'ctrl-down' sets previous or next expression in current session history
    - 'a' move time-frame back
    - 'x' move time-frame forward    
    - 'e' filter by level error
    - 'w' filter by level warning
    - 'd' filter by level debug
    - 'i' filter by level info
    - 'q' filter by level info
    - 'c' clear filter
```

## Expression editor
- Properties contains keys as configured by application in the C# project
- use ' for string
- examples: <br/>
    -> ```date(UtcTimeStamp) >= '2021-09-25' and date(UtcTimeStamp) <= '2021-10-02'```<br/>
    -> ```Level in ('Error')```<br/>
    -> ```Level in ('Error') or Properties.ThreadId in (5,14)```<br/>

## Serilog setup in C# project

Add serilog sink with one of:

```
$ dotnet add package Serilog.Sinks.MongoDB --version 5.1.1
PM> Install-Package Serilog.Sinks.MongoDB -Version 5.1.1

or in .csproj:

<PackageReference Include="Serilog.Sinks.MongoDB" Version="5.1.1" />
```

```c#

 var logger = new LoggerConfiguration()
                .MinimumLevel.Debug()
                .Enrich.FromLogContext()
                .Enrich.WithProperty("Origin", "Sample ingest")
                .Enrich.WithAssemblyName()
                .Enrich.WithCorrelationId()
                .Enrich.WithMemoryUsage()
                .Enrich.WithProcessId()
                .Enrich.WithThreadId()
                .WriteTo.Conditional(_ => true, wt => wt.Console())
                .WriteTo.MongoDBBson(cfg =>
                {
                    // custom MongoDb configuration
                    //var mongoDbSettings = new MongoClientSettings
                    //{
                    //    UseTls = false,
                    //    AllowInsecureTls = true,
                    //    Credential = MongoCredential.CreateCredential("DBNAME", "USER", "PASSWORD"),
                    //    Server = new MongoServerAddress("127.0.0.1",27017)
                    //};

                    var mongoDbInstance = new MongoClient(
                        "mongodb://USER:PASSWORD@127.0.0.1:27017/")
                    .GetDatabase("DBNAME");

                    // sink will use the IMongoDatabase instance provided
                    cfg.SetMongoDatabase(mongoDbInstance);
                })
                .CreateLogger();
```
<br />

## Bug reports or issues
Bug reports or issues can be reported [here](https://github.com/LucaGabi/VSE-Serilog-events-viewer/issues/new/choose)
## Test with a fake log producer

Clone https://github.com/LucaGabi/VSE-Serilog-events-viewer.git

Inside ```fake-logs-producer/seqcli-dev/src/Roastery/Program.cs``` change these lines (24,25):
```c#
private const string ConnectionString = "...";
private const string DB = "...";
```

## Donations 
If you found the project useful and you'd like to donate
<br/> 

# [![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=5MS8L5EVWBEUC)

