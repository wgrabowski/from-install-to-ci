pipeline{
	agent any
	stages{
		stage('install dependencies') {
			steps {
				nodejs('main') {
    // some block

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
stage('verify'){
parallel{
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
				}
			}
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