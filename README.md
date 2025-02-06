# Annamitra

Annamitra is a MERN stack-based application designed to reduce food waste and alleviate hunger by enabling individuals to donate leftover food directly to those in need. The application features a dual interface for donors and recipients, allowing seamless food listing and requesting. This project supports the UN's Sustainable Development Goals, promoting responsible consumption and production, and partnerships to achieve these goals.

## Features
- **Unified Interface**: Single interface for both donating and receiving food.
- **Real-time Updates**: Live updates on available food donations.
- **User Authentication**: Secure login using JWT.
- **File Handling**: Utilizes Multer for handling file uploads.
- **Data Visualization**: Uses Chart.js for visualizing donation data.
- **Responsive Design**: Styled with Tailwind CSS for a modern and responsive UI.

## Technologies Used
- **Frontend**: React, Tailwind CSS, Chart.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **File Handling**: Multer

## Installation

### Clone the repository
```bash
git clone https://github.com/krishaga/Annamitra
cd annamitra
```
### Install dependencies for the server
```bash
cd backend
npm install
```
### Install dependencies for the client
```bash
cd ../frontend
npm install
```
### Set up environment variables
Create a .env file in the server directory and add the following variables:
```bash
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
### Run the application
In the server directory, start the backend server:
```bash
node index.js
```
In the client directory, start the React development server:
```bash
npm run dev
```

## Usage

- Register and log in as a user.
- Share your location to facilitate pickups and drop-offs.
- Browse available food donations.
- Request food donations and create new listings.
- List available food for donation with details like type, quantity, and expiration date.
- Switch between donating and receiving food with a unified interface.

## Contributing
We welcome contributions from the community. To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes and commit them with a descriptive message.
    ```bash
    git commit -m "Add feature: your feature description"
    ```
4. Push your changes to the branch.
    ```bash
    git push origin feature/your-feature-name
    ```
5. Create a pull request, detailing the changes and the motivation behind them.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
- Thanks to the developers of the MERN stack and related libraries.
- Thanks to [Annapurna](https://devfolio.co/projects/annapurna-de9f) for their UI design.
- Special thanks to community members and testers who provided valuable feedback.

## Contact
For any queries or suggestions, please contact us at:

- **Email**: [Email Here](krishagarwal0716@gmail.com)
- **GitHub Issues**: [https://github.com/krishaga/annamitra/issues](https://github.com/krishaga/annamitra/issues)
