pipeline{
 	agent any
	stages{
		stage('install dependencies') {

			steps {
							nodejs('main') {
				sh 'npm install'
			}
			}
		}

		stage('audit dependencies') {
			steps {
							nodejs('main') {
				sh 'npm audit --audit-level=high'
			}
					}
		}

		stage('lint') {

			steps {
									nodejs('main') {
				sh 'npm run lint'
			}
					}
		}

		stage('test') {

			steps {
									nodejs('main') {
				sh 'npm run test'
				junit 'test-report.xml'
			}
					}
		}

		stage('build') {

			steps {
									nodejs('main') {
				sh 'npm run build'
			}
					}
		}

		stage('build legacy') {

			steps {
									nodejs('main') {
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