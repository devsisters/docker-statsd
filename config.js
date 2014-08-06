{
  "graphitePort": parseInt(process.env.STATSD_GRAPHITE_PORT || "2003"),
  "graphiteHost": process.env.STATSD_GRAPHITE_HOST || "localhost",
  "port": 8125,
  "graphite": {
    "legacyNamespace": false
  }
}
