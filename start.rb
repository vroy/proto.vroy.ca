require "app"

port = (ARGV.first.to_i > 0) ? ARGV.first.to_i : nil

Ramaze.start(:port => port)
