// MONGODB CONNECTION
export const DATABASE = "mongodb+srv://taskapi:taskapi@cluster0.s6qnc.mongodb.net/taskApi?retryWrites=true&w=majority&appName=Cluster0";

// JWT config
export const JWT_KEY = "5EC7CEFA1BE7C9354A639369A2AA8";
export const JWT_EXPIRE_TIME = 60 * 60 * 24 * 30;

// Email config
// export const EMAIL_HOST = "smtp.gmail.com"; // Gmail SMTP server
// export const EMAIL_PORT = 465; // Port for sending email using STARTTLS
// export const EMAIL_SECURITY = true; // Encryption method
// export const EMAIL_USER = "info.hutghar@gmail.com"; // Your Gmail address
// export const EMAIL_PASSWORD = "@arifujjaman12"; // Your Gmail password (or App Password)

export const EMAIL_HOST="mail.teamrabbil.com"
export const EMAIL_PORT=25
export const EMAIL_SECURITY=false
export const EMAIL_USER="info@teamrabbil.com"
export const EMAIL_PASSWORD="~sR4[bhaC[Qs"
export const EMAIL_UN_AUTH=false


export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; //15 Min
export const REQUEST_LIMIT_NUMBER = 2000; //2000 Request Per 15 Min

export const WEB_CACHE = false;
export const PORT = 5050;
