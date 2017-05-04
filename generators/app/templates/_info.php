name = <%= module_name %>
description = <%= module_desc %>
core = 7.x
package = Other
<% for(var dep in dependencies) { %>
dependencies[] = <%= dependencies[dep] %><% } %>