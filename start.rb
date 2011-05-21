require "app"

port = (ARGV.first.to_i > 0) ? ARGV.first.to_i : 7000

Ramaze.start(:port => port)
