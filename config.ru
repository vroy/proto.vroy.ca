require "app"

$stdout.reopen( ::IO.popen("/home/vince/bin/cronolog /home/vince/www/proto.vroy.ca/logs/stdout.%Y-%m-%d.log", "w") )
$stderr.reopen( ::IO.popen("/home/vince/bin/cronolog /home/vince/www/proto.vroy.ca/logs/stderr.%Y-%m-%d.log", "w") )

Ramaze.trait[:essentials].delete Ramaze::Adapter
Ramaze.start!
run Ramaze::Adapter::Base
