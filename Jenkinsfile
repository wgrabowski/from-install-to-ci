pipeline{
	agent any
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
stage('verify'){
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