walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bPumpkin Spice\b/g, "Haggis Spice");
	v = v.replace(/\bPumpkin spice\b/g, "Haggis spice");
	v = v.replace(/\bpumpkin Spice\b/g, "haggis Spice");
	v = v.replace(/\bpumpkin spice\b/g, "haggis spice");
	v = v.replace(/\bPUMPKIN SPICE\b/g, "HAGGIS SPICE");
	
	textNode.nodeValue = v;
}


