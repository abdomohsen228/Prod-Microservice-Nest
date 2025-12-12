# Production Microservice NestJS

A microservices architecture built with NestJS, consisting of multiple services communicating via TCP transport.

## Project Structure

```
Prod-Microservice-Nest/
├── gateway/          # API Gateway service (Port 3000)
├── user-service/     # User management service (Port 3002)
└── store-service/    # Store management service (Port 3001)
```

## Services

- **Gateway Service**: API Gateway running on TCP port 3000
- **User Service**: User management microservice running on TCP port 3002
- **Store Service**: Store management microservice running on TCP port 3001

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

## Installation

1. Clone the repository
2. Install dependencies for each service:

```bash
cd gateway && npm install
cd ../user-service && npm install
cd ../store-service && npm install
```

## Running the Services

### Development Mode

Run each service individually:

```bash
# Terminal 1 - Gateway
cd gateway
npm run start:dev

# Terminal 2 - User Service
cd user-service
npm run start:dev

# Terminal 3 - Store Service
cd store-service
npm run start:dev
```

### Production Mode

Build and run each service:

```bash
# Build
cd gateway && npm run build
cd ../user-service && npm run build
cd ../store-service && npm run build

# Run
cd gateway && npm run start:prod
cd ../user-service && npm run start:prod
cd ../store-service && npm run start:prod
```

### Using Docker Compose

```bash
docker-compose up -d
```

This will start all services in containers.

## Testing

Run tests for each service:

```bash
cd gateway && npm test
cd ../user-service && npm test
cd ../store-service && npm test
```

## Technology Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Transport**: TCP (for inter-service communication)
- **Runtime**: Node.js

## License

UNLICENSED

