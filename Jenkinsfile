pipeline {
  agent any

  stages {
      stage('Build') {
          steps {
              echo 'Building..'
              sh 'docker --version'
          }
      }
      stage('Test') {
          steps {
              echo 'Testing...'
          }
      }
      stage('Deploy') {
          steps {
              echo 'Deploying....'
              sh 'git pull origin main'
              sh 'npm install'
              sh 'sudo docker-compose build'
              sh 'sudo docker-compose up -d'
          }
      }
  }
}
