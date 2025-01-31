# Avia Protector

Advanced web application for aviation safety and security monitoring.

## Features

- User Authentication with Multi-factor Authentication
- Real-time Aircraft Monitoring Dashboard
- Incident Reporting System
- Risk Analysis and Predictive Analytics
- Maintenance Scheduler
- Role-Based Access Control
- Data Encryption and Security
- Mobile Responsive Design
- Comprehensive Reporting & Analytics
- Scalable Architecture

## Tech Stack

- Frontend: React.js
- Backend: Node.js/Express
- Database: MongoDB
- Real-time Updates: Socket.IO
- Maps Integration: Google Maps API
- Authentication: JWT
- Security: HTTPS, Helmet

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client
   npm install
   ```
3. Create a `.env` file with required environment variables
4. Run the development server:
   ```bash
   npm run dev:full
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Security

- All sensitive data is encrypted
- JWT-based authentication
- Rate limiting
- CORS protection
- Security headers with Helmet
- Input validation
- XSS protection

## License

MIT
