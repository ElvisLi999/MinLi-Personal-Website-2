export const LocalURI = "mongodb://localhost/store";
export const RemoteURI = process.env.RemoteURI;

//localhost: connect to local database; remotehost: connect to cloud database
export const HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
export const Secret = "someSecret";