pipeline {
  agent any
  stages {
    stage('Clone Repositry') {
      steps {
        git(url: 'https://github.com/2wetdogs/helloworld.git', branch: 'master')
      }
    }

    stage('Docker Build') {
      parallel {
        stage('472675133747') {
          steps {
            script {
              def myImage

              myImage = docker.build("472675133747${ECR_REPO_NAME}")
              myImage = docker.build("472675133747${ECR_REPO_NAME}:${env.BUILD_NUMBER}")
            }

          }
        }

        stage('169511295254') {
          steps {
            script {
              def myImage

              myImage = docker.build("169511295254${ECR_REPO_NAME}")
              myImage = docker.build("169511295254${ECR_REPO_NAME}:${env.BUILD_NUMBER}")
            }

          }
        }

      }
    }

    stage('Deploy to ECR') {
      parallel {
        stage('472675133747') {
          steps {
            script {
              docker.withRegistry(
                'https://472675133747.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:aws.credentials')
                {
                  def myImage = docker.image("472675133747${ECR_REPO_NAME}")
                  myImage.push('latest')
                  myImage.push("${env.BUILD_NUMBER}")
                }
              }

            }
          }

          stage('169511295254') {
            steps {
              script {
                docker.withRegistry(
                  'https://169511295254.dkr.ecr.us-east-1.amazonaws.com', 'ecr:us-east-1:aws.credentials')
                  {
                    def myImage = docker.image("169511295254${ECR_REPO_NAME}")
                    myImage.push('latest')
                    myImage.push("${env.BUILD_NUMBER}")
                  }
                }

              }
            }

          }
        }

      }
      environment {
        ECR_REPO_NAME = '.dkr.ecr.us-east-1.amazonaws.com/helloworld-node'
        ECR_SERVER = '.dkr.ecr.us-east-1.amazonaws.com'
      }
    }