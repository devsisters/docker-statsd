{
  "graphitePort": parseInt(process.env.STATSD_GRAPHITE_PORT || "2003"),
  "graphiteHost": process.env.STATSD_GRAPHITE_HOST || "localhost",
  "port": parseInt(process.env.STATSD_PORT || "8125"),
  "mgmt_port": parseInt(process.env.STATSD_ADMINPORT || "8126"),
  "graphite": {
    "legacyNamespace": false
  }
}
