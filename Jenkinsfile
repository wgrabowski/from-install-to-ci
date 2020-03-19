pipeline{
	agent {
	}
	
	node {
    env.NODEJS_HOME = "${tool 'Node 6.x'}"
	// on linux / mac
	env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
	// on windows
	env.PATH="${env.NODEJS_HOME};${env.PATH}"
	sh 'npm --version'
}
	stages{
		stage('install dependencies') {
			steps {
				sh 'npm install'
			}
		}

		stage('audit dependencies') {
			steps {
				sh 'npm audit --audit-level=high'
			}
		}

parallel{
		stage('lint') {
			steps {
				sh 'npm run lint'
			}
		}

		stage('test') {
			steps {
				sh 'npm run test'
			}
		}
}

		stage('build') {
			steps {
				sh 'npm run build'
			}
		}

		stage('build legacy') {
			steps {
				sh 'npm run build:legacy'
			}
		}
	}


	post{
			always{
					echo "========always========"
		}
			success{
					echo "========pipeline executed successfully ========"
		}
			failure{
					echo "========pipeline execution failed========"
		}
	}
}