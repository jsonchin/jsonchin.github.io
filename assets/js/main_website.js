function generateDAG() {
    var svg = d3.select("svg");
    var width = $("#d3-dag-container").width();
    var height = $("#d3-dag-container").height();

    var semesters_l = ['SP16', 'SU16', 'FA16', 'SP17', 'FA17', 'SP18', 'FA18', 'SP19'];

    var xStart = width/12;
    var yMiddle = height/2;

    function calcX(k) {
      return xStart + width/semesters_l.length*k;
    }

    var yStart = height/7;
    function calcY(k) {
      return yMiddle/5*k + yStart;
    }

    var future_semesters = ['SP19'];

    var semesters = [];

    for (var i in semesters_l) {
        semesters.push({
            'semester':semesters_l[i],
            'x':calcX(i),
            'y':calcY(-1)
        })
    }

    var nodes = [{'name':'CS61A', 'department':'CS',
                'x':calcX(0), 'y':calcY(2),
                'full_name': 'The Structure and Interpretation of Computer Programs'},
        {'name':'CS61B', 'department':'CS',
                'x':calcX(1), 'y':calcY(2),
                'full_name':'Data Structures'},
        {'name':'CS61C', 'department':'CS',
                'x':calcX(2), 'y':calcY(1),
                'full_name':'Machine Structures'},
        {'name':'CS70', 'department':'CS',
                'x':calcX(2), 'y':calcY(3),
                'full_name':'Discrete Math and Probability Theory'},
        {'name':'CS170', 'department':'CS',
                'x':calcX(3), 'y':calcY(2),
                'full_name':'Efficient Algorithms and Intractable Problems'},
        {'name':'CS176', 'department':'CS',
                'x':calcX(6), 'y':calcY(2),
                'full_name':'Algorithms for Computational Biology'},
        {'name':'CS188', 'department':'CS',
                'x':calcX(4), 'y':calcY(3),
                'full_name':'Artificial Intelligence'},
        {'name':'INFO159', 'department':'CS',
                'x':calcX(4), 'y':calcY(5),
                'full_name':'Natural Language Processing'},
        {'name':'CS189', 'department':'CS',
                'x':calcX(4), 'y':calcY(4),
                'full_name':'Machine Learning'},
        {'name':'CS186', 'department':'CS',
                'x':calcX(3), 'y':calcY(0),
                'full_name':'Introduction to Database Systems'},
        {'name':'CS162', 'department':'CS',
                'x':calcX(5), 'y':calcY(0),
                'full_name':'Operating Systems and Systems Programming'},
        {'name':'CS161', 'department':'CS',
                'x':calcX(5), 'y':calcY(1),
                'full_name':'Computer Security'},
        {'name':'CS164', 'department':'CS-N',
                'x':calcX(7), 'y':calcY(1),
                'full_name':'Programming Languages and Compilers'},
        {'name':'CS168', 'department':'CS',
                'x':calcX(6), 'y':calcY(0),
                'full_name':'Introduction to the Internet: Architecture and Protocols'},
        {'name':'STAT133', 'department':'STAT',
                'x':calcX(2), 'y':calcY(4),
                'full_name':'Concepts in Computing with Data'},
        {'name':'STAT134', 'department':'STAT',
                'x':calcX(0), 'y':calcY(5),
                'full_name':'Concepts of Probability'},
        {'name':'STAT135', 'department':'STAT',
                'x':calcX(2), 'y':calcY(6),
                'full_name':'Concepts of Statistics'},
        {'name':'DS100', 'department':'STAT-N',
                'x':calcX(5), 'y':calcY(4),
                'full_name':'Data Science'},
        {'name':'STAT151A', 'department':'STAT',
                'x':calcX(5), 'y':calcY(7),
                'full_name':' Linear Modeling: Theory and Applications'},
        {'name':'STAT153', 'department':'STAT',
                'x':calcX(4), 'y':calcY(6),
                'full_name':'Introduction to Time Series'},
        {'name':'STAT155', 'department':'STAT',
                'x':calcX(3), 'y':calcY(5),
                'full_name':'Game Theory'},
        {'name':'MATH53', 'department':'MATH',
                'x':calcX(0), 'y':calcY(6),
                'full_name':'Multivariable Calculus'},
        {'name':'MATH54', 'department':'MATH',
                'x':calcX(0), 'y':calcY(7),
                'full_name':'Linear Algebra and Differential Equations'},
        {'name':'EE16A', 'department':'EE',
                'x':calcX(3), 'y':calcY(8),
                'full_name':'Designing Information Devices and Systems I'},
        {'name':'IND160', 'department':'EE',
                'x':calcX(6), 'y':calcY(8),
                'full_name':'Nonlinear and Discrete Optimization'},
        {'name':'IND162', 'department':'EE',
                'x':calcX(7), 'y':calcY(8),
                'full_name':'Linear Programming and Network Flows'},
                ];
    var nodesByName = {};
    for (i in nodes) {
        nodesByName[nodes[i].name] = nodes[i];
    }
    var edges = [{'source':'CS61A', 'target':'CS61B', 'value':2},
        {'source':'CS61B', 'target':'CS70', 'value':2},
        {'source':'CS61B', 'target':'CS61C', 'value':2},
        {'source':'CS70', 'target':'CS170', 'value':2},
        {'source':'CS170', 'target':'CS176', 'value':2},
        {'source':'CS61C', 'target':'CS186', 'value':2},
        {'source':'CS70', 'target':'CS189', 'value':2},
        {'source':'CS70', 'target':'CS188', 'value':2},
        {'source':'CS70', 'target':'INFO159', 'value':2},
        {'source':'CS61C', 'target':'CS161', 'value':2},
        {'source':'CS61C', 'target':'CS162', 'value':2},
        {'source':'CS162', 'target':'CS168', 'value':2},
        {'source':'CS162', 'target':'CS164', 'value':2},
        {'source':'STAT134', 'target':'STAT133', 'value':2},
        {'source':'STAT134', 'target':'STAT135', 'value':2},
        {'source':'STAT134', 'target':'STAT155', 'value':2},
        {'source':'STAT135', 'target':'STAT153', 'value':2},
        {'source':'STAT153', 'target':'STAT151A', 'value':2},
        {'source':'INFO159', 'target':'DS100', 'value':2},
        {'source':'CS188', 'target':'DS100', 'value':2},
        {'source':'CS189', 'target':'DS100', 'value':2},
        {'source':'MATH53', 'target':'STAT135', 'value':2},
        {'source':'MATH54', 'target':'STAT135', 'value':2},
        {'source':'MATH54', 'target':'EE16A', 'value':2},
        {'source':'MATH54', 'target':'STAT151A', 'value':2},
        {'source':'EE16A', 'target':'IND160', 'value':2},
        { 'source': 'IND160', 'target': 'IND162', 'value': 2 },
    ];



    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var semester_g= svg.append('g')
            .selectAll('text')
            .data(semesters)
            .enter()
                .append('g')
                .attr('transform', function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                });

    var semesterRects = semester_g
                .append('rect')
                .attr('height', function(d) {
                    return height;
                })
                .attr('width', function(d) {
                    return 2;
                })
                .attr('fill', '#f1f1f1');

    var semesterLabels = semester_g
                .append('text')
                .attr('class', 'semester-label')
                    .attr('text-anchor', 'middle')
                    .attr('font-style', function(d) {
                        if (future_semesters.indexOf(d.semester) != -1) {
                            return 'italic';
                        } else {
                            return 'normal';
                        }
                    })
                    .text(function(d) {
                        return d.semester;
                    })


    var link = svg.append("g")
                .attr("class", "links")
            .selectAll("line")
            .data(edges)
            .enter()
                .append("line")
                .attr("stroke-width", function(d) {return 2;})
                .attr("x1", function(d){
                    return nodesByName[d.source].x;})
                .attr("y1", function(d){
                    return nodesByName[d.source].y;})
                .attr("x2", function(d){
                    return nodesByName[d.target].x;})
                .attr("y2", function(d){
                    return nodesByName[d.target].y;});

    var node = svg.append("g")
            .selectAll("circle")
            .data(nodes)
            .enter()
            .append("g")
                .attr('transform', function(d) {
                    return "translate(" + d.x + "," + d.y + ")";
                });


    var nodeBorder = 2;
    var nodeRadius = 35;

    var circleNodes = node.append("circle")
            .attr("class", "nodes")
            .attr("r", function(d) {return nodeRadius;})
            .attr("stroke-width", function(d) {return nodeBorder;})
            .attr("fill", function(d) {return color(d.department);})
            .on("mouseover", function(d) {
                d3.select(this)
                    .attr('stroke-width', nodeBorder+1)
                    .attr('fill', function(d) {
                        return d3.color(color(d.department)).brighter(0.4);
                    })


                tooltip
                    .html(d.full_name)
                    .style('opacity', 1)
                    .style('left', (d3.event.pageX) + 'px')
                    .style('top', (d3.event.pageY) + 'px')



            })
            .on("mouseout", function() {
                d3.select(this)
                .attr('stroke-width', nodeBorder)
                .attr('fill', function(d) {
                        return color(d.department);
                    });

                tooltip
                    .style('opacity', 0);
            });

    var text = node.append("text")
          .attr("class", "node-text")
          .attr('text-anchor', 'middle')
          .attr("dy", ".35em")
          .text(function(d) { return d.name });


    var tooltip = d3.select('body')
            .append('div')
            .attr('id', 'course-dag-tooltip');


}