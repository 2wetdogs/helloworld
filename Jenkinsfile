pipeline {
  agent any
  stages {
    stage('Clone Repositry') {
      steps {
        git(url: 'https://github.com/2wetdogs/helloworld.git', branch: 'master')
      }
    }

    stage('Docker Image') {
      steps {
        sh '''#!/bin/bash
#docker build -t 472675133747.dkr.ecr.us-east-1.amazonaws.com/helloworld-node -f Dockerfile .
'''
      }
    }

    stage('Deploy') {
      steps {
        script {
          docker.withRegistry(
            'https://472675133747.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:aws.credentials') {
              def myImage = docker.build('472675133747.dkr.ecr.us-east-1.amazonaws.com/helloworld-node')
              myImage.push('latest')
            }
          }

        }
      }

    }
  }