pipeline {
  agent any
  stages {
    stage('Clone Repositry') {
      steps {
        git(url: 'https://github.com/2wetdogs/helloworld.git', branch: 'master')
      }
    }

    stage('Docker Build') {
      steps {
        script {
          myImage = docker.build("${ECR_REPO_NAME}:${env.BUILD_NUMBER}")
        }

      }
    }

    stage('Deploy to ECR') {
      steps {
        script {
          docker.withRegistry(
            "https://472675133747.dkr.ecr.us-east-1.amazonaws.com",
            'ecr:us-east-1:aws.credentials')
            {
              def myImage = docker.image("${ECR_REPO_NAME}:${env.BUILD_NUMBER}")
              myImage.Push("${env.BUILD_NUMBER}")
            }
          }

        }
      }

    }
    environment {
      ECR_REPO_NAME = '472675133747.dkr.ecr.us-east-1.amazonaws.com/helloworld-node'
      ECR_SERVER = '472675133747.dkr.ecr.us-east-1.amazonaws.com'
    }
  }