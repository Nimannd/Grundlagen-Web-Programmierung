# Copy csproj and restore as distinct layers
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /sources

# Copy everything else and build website
COPY /UmbracoDemo/Properties/* ./Properties
COPY /UmbracoDemo/Views/* ./Views
COPY /UmbracoDemo/wwwroot/* ./wwwroot
COPY /UmbracoDemo/appsettings.json .
COPY /UmbracoDemo/Program.cs .
COPY /UmbracoDemo/UmbracoDemo.csproj .

# Build umbraco
RUN dotnet restore
RUN dotnet build
RUN dotnet publish -c release -o /output --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /output
COPY --from=build /output ./

ENV ASPNETCORE_URLS="http://+:8080"

VOLUME [ "/umbraco" ]

CMD [ "mkdir", "-p", "/umbraco/Media" ]

ENTRYPOINT ["dotnet", "UmbracoDemo.dll"]

EXPOSE 8080