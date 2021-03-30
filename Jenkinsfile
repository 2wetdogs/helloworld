pipeline {
  agent any
  def myImage
  stages {
    stage('Clone Repositry') {
      steps {
        git(url: 'https://github.com/2wetdogs/helloworld.git', branch: 'master')
      }
    }

    stage('Docker Image') {
      steps {
        script {
          myImage = docker.build('472675133747.dkr.ecr.us-east-1.amazonaws.com/helloworld-node')
        }

      }
    }

    stage('Deploy') {
      steps {
        script {
          docker.withRegistry(
            'https://472675133747.dkr.ecr.us-east-1.amazonaws.com',
            'ecr:us-east-1:aws.credentials')
            {
              myImage.push("${env.BUILD_NUMBER}")
              myImage.push('latest')
            }
          }

        }
      }

    }
    environment {
      ECR_REPO_NAME = '472675133747.dkr.ecr.us-east-1.amazonaws.com/helloworld-node'
    }
  }
