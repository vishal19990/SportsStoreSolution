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
-Update the startup class with the SpaService integration
-In Configureservice method
-In Configure method


#### Add Angular to the Project
 Goto SportStoreAp Folder add a new folder "Client"
-Goto "ClientApp" folder and run the ng command
- ng new --name SportsStoreNG --directory . --skip-install --skip-tests --skip-git --routing false --style css
-Configure angular with aspnetCore
-add wwwroot folder at projetc root level
- add the package 'Microsoft.AspNetCore.SpaService.Extensions'
dotnet add package Microsoft.AspNetCore.SpaService.Extensions 


#### Git branches For Angular

-01SportsStoreAPI
-02NGSportsStore
-03NGConfiguration
-04NavbarComponent
-05NGNavbarModule
-06NgStoresComponent
-07NgStoresModule
