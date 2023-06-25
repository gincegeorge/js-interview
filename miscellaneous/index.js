async function generateRule(proto, sourceIps, sourcePorts, destIps, destPorts, fwMark, lanZoneIfaces) {

    console.log(proto)
    console.log(sourceIps)
    console.log(sourcePorts)
    console.log(destIps)
    console.log(destPorts)
    console.log(fwMark)
    console.log(lanZoneIfaces)



    let output = ''

    output += 'chain mangle_output {\n'
    output += `  ip saddr { ${sourceIps} } ip daddr { ${destIps} } counter meta mark set ${fwMark} comment "!fw4: ${fwMark}"\n`
    output += `  ip6 saddr { ${sourceIps} } ip6 daddr { ${destIps} } counter meta mark set ${fwMark} comment "!fw4: ${fwMark}"\n`
    output += '}\n\n'

    output += 'chain mangle_prerouting {\n'
    for (const iface of lanZoneIfaces) {
        output += `  iifname ${iface} ip saddr { ${sourceIps} } ip daddr { ${destIps} } counter meta mark set ${fwMark} comment "!fw4: ${fwMark}"\n`
        output += `  iifname ${iface} ip6 saddr { ${sourceIps} } ip6 daddr { ${destIps} } counter meta mark set ${fwMark} comment "!fw4: ${fwMark}"\n`
    }
    output += '}\n'

    return output

};

generateRule(
    'all',
    '0.0.0.0/0,::/0',
    'none',
    '104.31.16.9,104.31.16.120,104.21.39.145,172.67.170.206,104.17.49.74,104.17.50.74,104.31.16.11,104.31.16.118,2606:4700:3033::6815:2791,2606:4700:3033::ac43:aace',
    'none', '0x000affa1',
    ['br-lan'])
    .then(result => console.log(result))

