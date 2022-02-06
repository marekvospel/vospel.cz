void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/marekvospel/vospel.cz"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "Jenkins"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

node {
    def app

    stage('Set build status') {
        setBuildStatus("Building...", "PENDING")
    }

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build('.')
    }

    post {
        success {
            setBuildStatus("Build succeeded", "SUCCESS")
        }

        failure {
            setBuildStatus("Build Failed", "FAILURE")
        }
    }
}
