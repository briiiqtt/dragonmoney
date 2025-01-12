# 1. 빌드 환경 설정
FROM node:22 AS builder

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일을 복사하고 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 프로젝트 파일을 복사
COPY . .

# Next.js 빌드
RUN npm run build

# 2. 실행 환경 설정
FROM node:22 AS runner

# 작업 디렉토리 설정
WORKDIR /app

# 빌드된 파일을 실행 환경으로 복사
COPY --from=builder /app ./

# Next.js 서버 실행
CMD ["npm", "start"]
# CMD ["npm", "run", "dev"]

# 외부에서 접근할 수 있도록 포트 노출
EXPOSE 22000
