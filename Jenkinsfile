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
docker build -t helloworld-node -f Dockerfile .'''
      }
    }

  }
}