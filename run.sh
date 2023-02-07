set -m # to make job control work
bin/rails server -bar &
fg %1 # gross!