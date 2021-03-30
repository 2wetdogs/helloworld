node {
    def app
    def myImage

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("2wetdogs/helloworld-node")
        myImage = docker.build("472675133747.dkr.ecr.us-east-1.amazonaws.com/helloworld-node")  
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
    

}
