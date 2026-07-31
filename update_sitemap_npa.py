import xml.etree.ElementTree as ET
import datetime

# Helper function to format date
def get_today():
    return datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%S+00:00")

def update_sitemap(sitemap_path):
    try:
        tree = ET.parse(sitemap_path)
        root = tree.getroot()
        
        # Check if URL already exists
        url_exists = False
        namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
        for loc in root.findall('.//ns:loc', namespace):
            if loc.text == 'https://www.amalegalsolutions.com/what-happens-after-loan-account-becomes-npa':
                url_exists = True
                break
                
        if not url_exists:
            # Create new url element
            ET.register_namespace('', 'http://www.sitemaps.org/schemas/sitemap/0.9')
            url_element = ET.Element('url')
            
            loc = ET.SubElement(url_element, 'loc')
            loc.text = 'https://www.amalegalsolutions.com/what-happens-after-loan-account-becomes-npa'
            
            lastmod = ET.SubElement(url_element, 'lastmod')
            lastmod.text = get_today()
            
            priority = ET.SubElement(url_element, 'priority')
            priority.text = '0.80'
            
            root.append(url_element)
            tree.write(sitemap_path, encoding='utf-8', xml_declaration=True)
            print(f"Added URL to {sitemap_path}")
        else:
            print(f"URL already exists in {sitemap_path}")
            
    except Exception as e:
        print(f"Error updating {sitemap_path}: {e}")

update_sitemap('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/public/sitemap.xml')
update_sitemap('/Users/amalegalsolutions/Desktop/AMAWORK/AMA/ama/src/app/sitemap.xml')
