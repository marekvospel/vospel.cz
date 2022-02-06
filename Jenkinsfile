void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/marekvospel/vospel.cz"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "Jenkins"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

pipeline {
    agent any

    environment {
        registry = 'ghcr.io/marekvospel/vospel.cz'
        docketImage = ''
    }

    stages {
        stage('Set build status') {
            steps {
                setBuildStatus("Building...", "PENDING")
            }
        }

        stage('Clone repository') {
            steps {
                checkout scm
            }
        }


        stage('Build docker container') {
            steps {
                dockerImage = docker.build(registry)
            }
        }

        stage('Deploy image') {
            docker.withRegistry('ghcr.io', 'ghcr-login') {
                dockerImage.push('latest')
            }
        }
    }

    post {
        success {
            setBuildStatus("Build succeeded", "SUCCESS");
        }
        failure {
            setBuildStatus("Build failed", "FAILURE");
        }
        always {
            echo 'Cleaning up'
            deleteDir()
        }
    }
}
