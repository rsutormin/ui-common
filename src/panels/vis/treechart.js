/*global
 define
 */
/*jslint
 browser: true,
 white: true
 */
define([
    'kb.html',
    'kb.runtime',
    'q',
    'underscore',
    'kb.widget.vis.treechart'],
    function (html, R, q, _) {
        'use strict';

        function treechartWidget() {

            function widget(config) {

                var mount, container;


                function render() {

                    var tree = {

                            name:"able",
                            "children": [
                              {

name:"baker",
                                "children": [
                                  {

name:"charlie",
                                    "children": [
                                      {

name:"d1",
                                        "children": [
                                          {

                                            "name": "Name: 552"
                                          },
                                          {

                                            "name": "Name: 2708"
                                          }
                                        ]
                                      },
                                      {

name:"d4",
                                        "children": [
                                          {

                                            "name": "Name: 3302"
                                          },
                                          {

                                            "name": "Name: 3826"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {

name:"d7",
                                    "children": [
                                      {

                                        "children": [
                                          {

                                            "name": "Name: 2360"
                                          },
                                          {

                                            "name": "Name: 3004"
                                          }
                                        ]
                                      },
                                      {

name:"d8",
                                        "children": [
                                          {

name:"d9",
                                            "children": [
                                              {

                                                "name": "Name: 4162"
                                              },
                                              {

name:"d10",
                                                "children": [
                                                  {

                                                    "name": "Name: 1541"
                                                  },
                                                  {

                                                    "name": "Name: 1940"
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {

name:"d11",
                                            "children": [
                                              {

                                                "name": "Name: 4037"
                                              },
                                              {

name:"d12",
                                                "children": [
                                                  {

                                                    "name": "Name: 276"
                                                  },
                                                  {

                                                    "name": "Name: 1823"
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              },
                              {

name:"d13",
                                "children": [
                                  {

name:"d14",
                                    "children": [
                                      {

name:"D15",
                                        "children": [
                                          {

name:"d16",
                                            "children": [
                                              {

name:"d17",
                                                "children": [
                                                  {

name:"d18",
                                                    "children": [
                                                      {

                                                        "name": "Name: 1943"
                                                      },
                                                      {

                                                        "name": "Name: 1969"
                                                      }
                                                    ]
                                                  },
                                                  {

name:"d21",
                                                    "children": [
                                                      {

                                                        "name": "Name: 275"
                                                      },
                                                      {

name:"d23",
                                                        "children": [
                                                          {

                                                            "name": "Name: 1939"
                                                          },
                                                          {

                                                            "name": "Name: 1962"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {

name:"D25",
                                                "children": [
                                                  {

                                                    "name": "Name: 1717"
                                                  },
                                                  {

name:"D26",
                                                    "children": [
                                                      {

                                                        "name": "Name: 2370"
                                                      },
                                                      {

                                                        "name": "Name: 3215"
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {

name:"d27",
                                            "children": [
                                              {

name:"d28",
                                                "children": [
                                                  {

                                                    "children": [
                                                      {

                                                        "name": "Name: 3089"
                                                      },
                                                      {

                                                        "name": "Name: 3691"
                                                      }
                                                    ]
                                                  },
                                                  {

name:"d29",
                                                    "children": [
                                                      {

name:"d30",
                                                        "children": [
                                                          {

                                                            "name": "Name: 2273"
                                                          },
                                                          {

                                                            "name": "Name: 2869"
                                                          }
                                                        ]
                                                      },
                                                      {

name:"d31",
                                                        "children": [
                                                          {

                                                            "name": "Name: 926"
                                                          },
                                                          {

                                                            "name": "Name: 3610"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {

name:"d32",
                                                "children": [
                                                  {

name:"d33",
                                                    "children": [
                                                      {

                                                        "name": "Name: 610"
                                                      },
                                                      {

                                                        "name": "Name: 2927"
                                                      }
                                                    ]
                                                  },
                                                  {

name:"d34",
                                                    "children": [
                                                      {

name:"d35",
                                                        "children": [
                                                          {

                                                            "name": "Name: 1773"
                                                          },
                                                          {

                                                            "name": "Name: 2840"
                                                          }
                                                        ]
                                                      },
                                                      {

name:"d36",
                                                        "children": [
                                                          {

name:"d37",
                                                            "children": [
                                                              {

                                                                "name": "Name: 923"
                                                              },
                                                              {

                                                                "name": "Name: 1361"
                                                              }
                                                            ]
                                                          },
                                                          {

name:"d38",
                                                            "children": [
                                                              {

                                                                "name": "Name: 120"
                                                              },
                                                              {

                                                                "name": "Name: 965"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {

name:"d39",
                                        "children": [
                                          {

name:"d40",
                                            "children": [
                                              {

name:"d41",
                                                "children": [
                                                  {

name:"d42",
                                                    "children": [
                                                      {

name:"d43",
                                                        "children": [
                                                          {

                                                            "name": "Name: 1934"
                                                          },
                                                          {

                                                            "name": "Name: 2895"
                                                          }
                                                        ]
                                                      },
                                                      {

name:"d44",
                                                        "children": [
                                                          {

                                                            "name": "Name: 638"
                                                          },
                                                          {

                                                            "name": "Name: 2863"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {

name:"d45",
                                                    "children": [
                                                      {

name:"d46",
                                                        "children": [
                                                          {

name:"d47",
                                                            "children": [
                                                              {

                                                                "name": "Name: 219"
                                                              },
                                                              {

                                                                "name": "Name: 4296"
                                                              }
                                                            ]
                                                          },
                                                          {

name:"d48",
                                                            "children": [
                                                              {

name:"d49",
                                                                "children": [
                                                                  {

                                                                    "name": "Name: 39"
                                                                  },
                                                                  {

                                                                    "name": "Name: 664"
                                                                  }
                                                                ]
                                                              },
                                                              {

name:"d50",
                                                                "children": [
                                                                  {

                                                                    "name": "Name: 598"
                                                                  },
                                                                  {

                                                                    "children": [
                                                                      {

                                                                        "name": "Name: 867"
                                                                      },
                                                                      {

                                                                        "name": "Name: 1780"
                                                                      }
                                                                    ]
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {

name:"d51",
                                                        "children": [
                                                          {

name:"d52",
                                                            "children": [
                                                              {

                                                                "name": "Name: 1699"
                                                              },
                                                              {

                                                                "name": "Name: 2001"
                                                              }
                                                            ]
                                                          },
                                                          {

name:"d53",
                                                            "children": [
                                                              {

                                                                "name": "Name: 1001"
                                                              },
                                                              {

                                                                "name": "Name: 2176"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {

name:"d54",
                                                "children": [
                                                  {

name:"d55",
                                                    "children": [
                                                      {

                                                        "name": "Name: 853"
                                                      },
                                                      {

                                                        "name": "Name: 4264"
                                                      }
                                                    ]
                                                  },
                                                  {

name:"d56",
                                                    "children": [
                                                      {

name:"d57",
                                                        "children": [
                                                          {

                                                            "name": "Name: 262"
                                                          },
                                                          {

                                                            "children": [
                                                              {

                                                                "name": "Name: 3426"
                                                              },
                                                              {

                                                                "name": "Name: 4152"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {

name:"d58",
                                                        "children": [
                                                          {

                                                            "name": "Name: 1577"
                                                          },
                                                          {

                                                            "name": "Name: 2929"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {

name:"d59",
                                            "children": [
                                              {

name:"d60",
                                                "children": [
                                                  {

                                                    "name": "Name: 2962"
                                                  },
                                                  {

                                                    "name": "Name: 3058"
                                                  }
                                                ]
                                              },
                                              {

name:"d61",
                                                "children": [
                                                  {

name:"d62",
                                                    "children": [
                                                      {

name:"d63",
                                                        "children": [
                                                          {

name:"d64",
                                                            "children": [
                                                              {

                                                                "name": "Name: 60"
                                                              },
                                                              {

                                                                "children": [
                                                                  {

                                                                    "name": "Name: 1983"
                                                                  },
                                                                  {

                                                                    "name": "Name: 4131"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          },
                                                          {

name:"d65",
                                                            "children": [
                                                              {

                                                                "name": "Name: 2602"
                                                              },
                                                              {

name:"d66",
                                                                "children": [
                                                                  {

                                                                    "name": "Name: 1547"
                                                                  },
                                                                  {

                                                                    "name": "Name: 3079"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {

name:"d67",
                                                        "children": [
                                                          {

name:"d68",
                                                            "children": [
                                                              {

                                                                "name": "Name: 775"
                                                              },
                                                              {

                                                                "name": "Name: 1933"
                                                              }
                                                            ]
                                                          },
                                                          {

name:"d69",
                                                            "children": [
                                                              {

                                                                "name": "Name: 3583"
                                                              },
                                                              {

                                                                "name": "Name: 4076"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {

name:"d70",
                                                    "children": [
                                                      {

                                                        "name": "Name: 1046"
                                                      },
                                                      {

name:"d71",
                                                        "children": [
                                                          {

                                                            "name": "Name: 2121"
                                                          },
                                                          {

                                                            "name": "Name: 3497"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {

name:72,
                                    "children": [
                                      {

name:73,
                                        "children": [
                                          {

name:74,
                                            "children": [
                                              {

                                                "name": "Name: 1245"
                                              },
                                              {

                                                "name": "Name: 2787"
                                              }
                                            ]
                                          },
                                          {

name:75,
                                            "children": [
                                              {

                                                "name": "Name: 1935"
                                              },
                                              {

                                                "name": "Name: 3578"
                                              }
                                            ]
                                          }
                                        ]
                                      },
                                      {

name:71,
                                        "children": [
                                          {

name:76,
                                            "children": [
                                              {

name:77,
                                                "children": [
                                                  {

name:78,
                                                    "children": [
                                                      {

                                                        "name": "Name: 665"
                                                      },
                                                      {

name:79,
                                                        "children": [
                                                          {

                                                            "name": "Name: 919"
                                                          },
                                                          {

                                                            "name": "Name: 1866"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  },
                                                  {

name:80,
                                                    "children": [
                                                      {

name:81,
                                                        "children": [
                                                          {

                                                            "name": "Name: 885"
                                                          },
                                                          {

                                                            "name": "Name: 888"
                                                          }
                                                        ]
                                                      },
                                                      {

name:82,
                                                        "children": [
                                                          {

                                                            "name": "Name: 886"
                                                          },
                                                          {

                                                            "name": "Name: 3741"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {

name:83,
                                                "children": [
                                                  {

name:84,
                                                    "children": [
                                                      {

                                                        "name": "Name: 2123"
                                                      },
                                                      {

                                                        "name": "Name: 3544"
                                                      }
                                                    ]
                                                  },
                                                  {

name:85,
                                                    "children": [
                                                      {

name:86,
                                                        "children": [
                                                          {

                                                            "name": "Name: 3385"
                                                          },
                                                          {

                                                            "children": [
                                                              {

                                                                "name": "Name: 2994"
                                                              },
                                                              {

                                                                "name": "Name: 3296"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {

name:87,
                                                        "children": [
                                                          {

                                                            "name": "Name: 1359"
                                                          },
                                                          {

name:88,
                                                            "children": [
                                                              {

                                                                "name": "Name: 1854"
                                                              },
                                                              {

                                                                "name": "Name: 2489"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {

name:89,
                                            "children": [
                                              {

name:90,
                                                "children": [
                                                  {

                                                    "name": "Name: 868"
                                                  },
                                                  {

name:91,
                                                    "children": [
                                                      {

                                                        "name": "Name: 2877"
                                                      },
                                                      {

name:92,
                                                        "children": [
                                                          {

                                                            "name": "Name: 1017"
                                                          },
                                                          {

                                                            "name": "Name: 1018"
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              },
                                              {

name:93,
                                                "children": [
                                                  {

name:94,
                                                    "children": [
                                                      {

                                                        "name": "Name: 118"
                                                      },
                                                      {

                                                        "name": "Name: 1722"
                                                      }
                                                    ]
                                                  },
                                                  {

name:95,
                                                    "children": [
                                                      {

name:96,
                                                        "children": [
                                                          {

                                                            "name": "Name: 3298"
                                                          },
                                                          {

name:97,
                                                            "children": [
                                                              {

                                                                "name": "Name: 1942"
                                                              },
                                                              {

                                                                "name": "Name: 4153"
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      },
                                                      {

name:98,
                                                        "children": [
                                                          {

                                                            "name": "Name: 4145"
                                                          },
                                                          {

name:99,
                                                            "children": [
                                                              {

name:100,
                                                                "children": [
                                                                  {

                                                                    "name": "Name: 1510"
                                                                  },
                                                                  {

                                                                    "name": "Name: 1949"
                                                                  }
                                                                ]
                                                              },
                                                              {

name:101,
                                                                "children": [
                                                                  {

                                                                    "name": "Name: 1945"
                                                                  },
                                                                  {

                                                                    "name": "Name: 1946"
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          };

                    var $tree = $.jqElem('div').css({width : '800px', height : '500px'}).kbaseTreechart(

                        {
                            lineStyle: 'square',
                            fixed : true,
                            dataset : tree,
                            displayStyle:'nt',
                            distance : 50,
                            layout : 'cluster',
                            bias : 'leaf',
                        }

                    );

                    return {
                        title: 'Sample tree chart',
                        content: $tree.$elem,
                    }

                }

                function attach(node) {
                    return q.Promise(function (resolve) {
                        mount = node;
                        container = document.createElement('div');
                        mount.appendChild(container);
                        var rendered = render();

                        R.send('app', 'title', rendered.title);
                        $(container).append(rendered.content);

                        resolve();
                    });
                }
                function start(params) {
                    return q.Promise(function (resolve) {
                        resolve();
                    });
                }
                function stop(node) {
                    return q.Promise(function (resolve) {

                        resolve();
                    });
                }
                function detach(node) {
                    return q.Promise(function (resolve) {

                        resolve();
                    });
                }

                return {
                    attach: attach,
                    start: start,
                    stop: stop,
                    detach: detach
                };
            }


            return {
                create: function (config) {
                    return widget(config);
                }
            };
        }


        function setup(app) {
            app.addRoute({
                path: ['treechart'],
                widget: treechartWidget()
            });

        }
        function teardown() {
            // TODO: remove routes
            return false;
        }
        function start() {
            //
            return false;
        }
        function stop() {
            //
            return false;
        }
        return {
            setup: setup,
            teardown: teardown,
            start: start,
            stop: stop
        };
    });
