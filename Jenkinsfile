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
docker build -t 472675133747.dkr.ecr.us-east-1.amazonaws.com/helloworld-node -f Dockerfile .
'''
      }
    }

  }
}