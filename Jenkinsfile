pipeline{
 	agent any
	stages{
		stage('install dependencies') {
			nodejs('main') {
			steps {
				sh 'npm install'
			}
			}
		}

		stage('audit dependencies') {
					nodejs('main') {
			steps {
				sh 'npm audit --audit-level=high'
			}
					}
		}

		stage('lint') {
					nodejs('main') {
			steps {
				sh 'npm run lint'
			}
					}
		}

		stage('test') {
					nodejs('main') {
			steps {
				sh 'npm run test'
				junit 'test-report.xml'
			}
					}
		}

		stage('build') {
					nodejs('main') {
			steps {
				sh 'npm run build'
			}
					}
		}

		stage('build legacy') {
					nodejs('main') {
			steps {
				sh 'npm run build:legacy'
			}
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