{
  nodes: (function() {
    var node_name = "STATSD_NODE_{}_HOST";
    var node_index = 1;
    while (true) {
      var node_i_name = node_name.replace("{}", node_index);
      if (!process.env[node_i_name]) {
        break;
      }
      node_index++;
    }
    if (node_index == 1) {
      console.log("No node!");
    }
    var nodes = [];
    for (var i=1;i<node_index;i++) {
      var node = { 
        host: process.env['STATSD_NODE_' + i + '_HOST'],
        port: parseInt(process.env['STATSD_NODE_' + i + '_PORT'] || "8125"),
        adminport: parseInt(process.env['STATSD_NODE_' + i + '_ADMINPORT'] || "8126")
      };
      nodes.push(node);
    }
    console.log(nodes);
    return nodes;
  })(),
  udp_version: 'udp4',
  port: parseInt(process.env['STATSD_PROXY_PORT'] || "8125")
}
