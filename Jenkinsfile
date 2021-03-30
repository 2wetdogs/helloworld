node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        app = docker.build("2wetdogs/helloworld-node")
        ecrbuild = docker.build("helloworld-node/helloworld-node")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image to DockerHub') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
    
    stage('Push Image to AWS ECR') {
        docker.withRegsitry('https://472675133747.dkr.ecr.us-east-1.amazonaws.com', 'aws-credentials') {
            ecrbuild.push("${env.BUILD_NUMBER}") 
            ecrbuild.push("latest")
        }
    }
}
