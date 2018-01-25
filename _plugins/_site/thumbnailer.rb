require 'RMagick'

module Jekyll
    	
	class ThumbGenerator < Generator
		
		def generate(site)
			@config = site.config['thumbnails']
			@gallery_dir = File.expand_path(@config['dir'])
			thumbify(files_to_resize)
	 	end

		def files_to_resize
	 		to_resize = []
			Dir.glob(File.join(@gallery_dir, "*.{png,jpg,jpeg,gif}")).each do |file|
				if !File.basename(file).include? "-thumb"
					thumbname = File.join(@gallery_dir, File.basename(file).sub(File.extname(file), "-thumb#{File.extname(file)}"))
					if !File.exists?(thumbname)
						to_resize.push({ "file" => file, "thumbname" => thumbname })
					end
				end
			end
	 		return to_resize
		end	

	 	def thumbify(items)
	 		if items.count > 0
		 		items.each do |item|
		 			img = Magick::Image.read(item['file']).first
		 			thumb = img.resize_to_fill!(@config['thumb_width'], @config['thumb_height'])
		 			thumb.write(item['thumbname'])
		 			thumb.destroy!
		 		end
	 		end
	 	end

	end

# Had to remove this because Github overrides custom plugins
#	module Filters
	   	# remove para tags from generated html
#	    def remove_para(input)
#	      input.gsub!(/\<\/p>|\<p\>|\<img.*\>/, "")
#	      return input
#	    end
#	end

end
