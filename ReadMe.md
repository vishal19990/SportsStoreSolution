# SportsStore App

### Packages for the ASPNetCore WebApI

-  Install-Package Swashbuckle.AspNetCore -Version 6.1.0
-Install-Package Microsoft.EntityFrameworkCore -Version 5.0.3
-Install-Package Microsoft.EntityFrameworkCore.SqlServer -Version 5.0.3
-Install-Package Microsoft.EntityFrameworkCore.Design -Version 5.0.3


Using dotnet
-dotnet add package  Swashbuckle.ASPNetCore -Version 6.1.0
-dotnet add package Microsoft.EntityFrameworkCore -Version 5.0.3
-dotnet add package Microsoft.EntityFrameworkCore.SqlServer -Version 5.0.3
-dotnet add package Microsoft.EntityFrameworkCore.Design -Version 5.0.3



- dotnet ef database update
- (will ctreate the databse if it doesnot exists)
dotnet ef migrations add InitialDb -o Models\Migrations
(will create class for the database with tales and the constraints)
-dotnet ef migrations remove (will remove the migrations) 


#### Git branches For Angular

01 SportStoreApI
